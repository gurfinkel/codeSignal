#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub centuryFromYear {
    my ($year) = @_;

    return ~~(($year - 1) / 100) + 1;
}
