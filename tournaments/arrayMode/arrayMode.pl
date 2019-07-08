#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub arrayMode {
    my ($sequence) = @_;

    my %store = ();
    my $result = -1;
    my $count = 0;

    foreach my $item (@$sequence) {
        if ($store{$item}) {
            ++$store{$item};
        } else {
            $store{$item} = 1;
        }
    }

    foreach my $key (keys(%store)) {
        if ($store{$key} > $count) {
            $count = $store{$key};
            $result = int($key);
        }
    }

    return $result;
}
