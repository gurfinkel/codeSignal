#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub maxZeros {
    my ($n) = @_;

    my $result = 0;
    my $c = 0;

    for (my $i = 2; $n >= $i; ++$i) {
        my $d = 0;
        my $e = $n;

        while ($e) {
            if (!($e % $i)) {
                ++$d;
            }
            $e = ~~($e/$i);
        }

        if ($d > $c) {
            $c = $d;
            $result = $i;
        }
    }

    return $result;
}
