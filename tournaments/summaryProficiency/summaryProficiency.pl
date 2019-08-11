#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub summaryProficiency {
    my ($a, $n, $m) = @_;

    my $result = 0;

    for (my $i = 0; 0 < $n && @$a > $i; ++$i) {
        if ($m <= $$a[$i]) {
            $result += $$a[$i];
            --$n;
        }
    }

    return $result;
}
